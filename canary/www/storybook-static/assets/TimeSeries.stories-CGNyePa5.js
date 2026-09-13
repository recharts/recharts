import{R as e}from"./iframe-jjE6mnhE.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BmSvbO1p.js";import{R as h}from"./zIndexSlice-BF8b2iUS.js";import{C as g}from"./ComposedChart-CT0KVNUw.js";import{L as x}from"./Line-B1oFq1NW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BsTwUgiH.js";import{T as V}from"./Tooltip-BwV4328f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Ce-_Po8B.js";import"./Layer-DvjfGsuf.js";import"./resolveDefaultProps-DrW6c44U.js";import"./Text-yk6NtqvR.js";import"./DOMUtils-ClCL_aT_.js";import"./isWellBehavedNumber-D962mg0S.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./Label-CLl4R84L.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OM7L_4ys.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./types-D-bzS3aM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./throttle-DkPV1tJ5.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./index-SutJufb7.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Curve-CIYNdT84.js";import"./step-Bkxoj6hz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKtAdJL6.js";import"./useAnimationId-B8D6e613.js";import"./ActivePoints-DAEG3IaC.js";import"./Dot-D5qpHCDc.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getRadiusAndStrokeWidthFromDot-B-GOq11T.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";import"./useElementOffset-BncKUbAl.js";import"./uniqBy-BRtWYXzE.js";import"./iteratee-BRoualQB.js";import"./Cross-DHYc7gvr.js";import"./Rectangle-BtzXAEUx.js";import"./util-Dxo8gN5i.js";import"./Sector-CG0jHGWJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
