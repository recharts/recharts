import{R as e}from"./iframe-D1iFT1mY.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-zY-Ami2t.js";import{R as h}from"./zIndexSlice-B6TgBQrN.js";import{C as g}from"./ComposedChart-oca7_NcQ.js";import{L as x}from"./Line-CqxTaPcW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DpibCxtP.js";import{T as V}from"./Tooltip-D59ySJwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./resolveDefaultProps-BMIUma5c.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./Label-DT6YPp8b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8c0NuDUK.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./throttle-CzPbu-Ix.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./axisSelectors-CxzN54IZ.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./Curve-DI4m1DQG.js";import"./step-Bh5OwxZ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LcNNhy-w.js";import"./useAnimationId-CoQh4DtZ.js";import"./ActivePoints-ukxKvv9l.js";import"./Dot-CXZOPICM.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getRadiusAndStrokeWidthFromDot-BnvNbbpg.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./useElementOffset-BL3e6iYA.js";import"./uniqBy-VJyTBDYH.js";import"./iteratee-XPzf7EjH.js";import"./Cross-DzXfERyt.js";import"./Rectangle-V-255kdt.js";import"./util-Dxo8gN5i.js";import"./Sector-CRPzSp_9.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
