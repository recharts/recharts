import{R as e}from"./iframe-DeP4Wy7i.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D55ujQEE.js";import{R as h}from"./zIndexSlice-nnPIR1gF.js";import{C as g}from"./ComposedChart-CJez4X5P.js";import{L as x}from"./Line-BE3lNE-B.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BMFuZ2xk.js";import{T as V}from"./Tooltip-Bz-Ojc_z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CZDdo6k-.js";import"./Layer-CBmTHU88.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./Label-BDn5In4u.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-46z2Emao.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./types-CanfrVuk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./throttle-meF8BPI2.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./index-BI5vUZLp.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./Curve-BgvZ8zEy.js";import"./step-D7VIgsjb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XIng_I1E.js";import"./useAnimationId-BrY9w4yL.js";import"./ActivePoints-CKZ5Aqki.js";import"./Dot-BLQMwT0r.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./ErrorBarContext-kXoA89OY.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getRadiusAndStrokeWidthFromDot-mAqkcHAK.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./useGraphicalItemIdentity-DO54SzyN.js";import"./useElementOffset-DWI8BIOr.js";import"./uniqBy-Dv4DpKxP.js";import"./iteratee-CkWGGgWz.js";import"./Cross-iEk_dVMK.js";import"./Rectangle-fbRf2OP7.js";import"./util-Dxo8gN5i.js";import"./Sector-Cj9uxPUk.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
