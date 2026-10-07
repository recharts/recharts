import{R as e}from"./iframe-D7QPEs6x.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CddzMe5D.js";import{R as h}from"./zIndexSlice-DRJU9auo.js";import{C as g}from"./ComposedChart-DkVpVicC.js";import{L as x}from"./Line-FIUtuiWQ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BExrlGPv.js";import{T as V}from"./Tooltip-Cfw1HHY8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BAfU-RT3.js";import"./Layer-CQuTPpTF.js";import"./resolveDefaultProps-CRWlv-3y.js";import"./Text-DA3gX1pv.js";import"./DOMUtils-D_tBKlm6.js";import"./isWellBehavedNumber-DNiV3oks.js";import"./useId-BXkxS-9S.js";import"./useBackwardsCompatibleTheme-D_0RgBTV.js";import"./Label-Dw5oZdmX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BteXgmwI.js";import"./index-CJHqU6XL.js";import"./index-JZUC8P_o.js";import"./types-2ZxaQrL7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-laAQTg1Q.js";import"./throttle-Ct4NpkHt.js";import"./index-BMjjiw1C.js";import"./index-DHFQnlSZ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-i3bpT-Yu.js";import"./axisSelectors-ApgCgdVz.js";import"./index-wtCc4zD7.js";import"./CartesianChart-C9MabHj3.js";import"./chartDataContext-B6RxQWBJ.js";import"./CategoricalChart-vhkNV8Yp.js";import"./Curve-OPF6_FYd.js";import"./step-DBHgW2xP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-bKH57gE_.js";import"./useAnimationId-1a47Z03A.js";import"./ActivePoints-BIlb1Vnm.js";import"./Dot-BIHN86sB.js";import"./RegisterGraphicalItemId-DcoGQHKz.js";import"./ErrorBarContext-DMXrIZhk.js";import"./GraphicalItemClipPath-BnEsc6E8.js";import"./SetGraphicalItem-Bur606vr.js";import"./getRadiusAndStrokeWidthFromDot-4ipQIWUZ.js";import"./ActiveShapeUtils-Bfpd-TE6.js";import"./useGraphicalItemIdentity-Dd9FM8V7.js";import"./useElementOffset-utW7Y3fN.js";import"./uniqBy-LJLi2f6l.js";import"./iteratee-BozjXSbi.js";import"./Cross-CQQ3xt02.js";import"./Rectangle-DIfEIhEu.js";import"./util-Dxo8gN5i.js";import"./Sector-C4mywg2Y.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
