import{e}from"./iframe-Daa7gVLq.js";import{X as s}from"./XAxis-9jKN-_DJ.js";import{R as y}from"./arrayEqualityCheck-DHiMbEr4.js";import{C as g}from"./ComposedChart-CYLKALlp.js";import{L as x}from"./Line-B5G8X7n4.js";import{R as S}from"./RechartsHookInspector-5CuZ5Ttw.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-BSy2Ei6Q.js";import{T as O}from"./Tooltip-DmXRg1lA.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./CartesianAxis-BVtnbRV6.js";import"./Layer-CGvX8Aev.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./Label-Czm8SDG7.js";import"./PolarUtils-BgeQKPj6.js";import"./ZIndexLayer-BpC0cLWO.js";import"./zIndexSlice-DRH3Lnc3.js";import"./types-C4ZPTuLr.js";import"./hooks-DRpX0LFg.js";import"./CategoricalChart-B6hlTMds.js";import"./RechartsWrapper-DHnB2RYt.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./ReactUtils-DBjM8e5X.js";import"./ActivePoints-CnyDSr4M.js";import"./Dot-DRRuIu69.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./ErrorBarContext-C3qObGNC.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./useAnimationId-ahZSEp8i.js";import"./getRadiusAndStrokeWidthFromDot-DQjBSxKW.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./Trapezoid-BpmoHtq5.js";import"./Sector-BNry3-1y.js";import"./Symbols-Ct_d7yT0.js";import"./Curve-CWMRaKtl.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";import"./useElementOffset-BEi6rhn-.js";import"./iteratee-C1MLwHnw.js";import"./Cross-kvNgnX-L.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
