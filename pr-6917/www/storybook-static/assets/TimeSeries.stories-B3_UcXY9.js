import{e}from"./iframe-D2DyXbcn.js";import{X as s}from"./XAxis-B_Rkajbb.js";import{R as y}from"./arrayEqualityCheck-WjtHcJHc.js";import{C as g}from"./ComposedChart-CLh2SeRt.js";import{L as x}from"./Line-D8rfWtVU.js";import{R as S}from"./RechartsHookInspector-CDdA-ZFQ.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-opT4Xs9T.js";import{T as O}from"./Tooltip-B9D5T6kV.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DA54HTPm.js";import"./CartesianAxis-YVPJ9daY.js";import"./Layer-BwzoyCOr.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./Label-CjanQvYq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-NA5ERVnG.js";import"./zIndexSlice-BQ_BDZqW.js";import"./types-uxMSZ2Tc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-JMcNkC16.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./RechartsWrapper-BOCCBYR7.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./ReactUtils-D1zizFIc.js";import"./ActivePoints-BMPW0nm-.js";import"./Dot-BkDSgj5P.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./useAnimationId-D72jT57q.js";import"./getRadiusAndStrokeWidthFromDot-BJgqpW3E.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./Symbols-f5SXrcZl.js";import"./Curve-O5r-1d1a.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";import"./useElementOffset-1lDb_Lm2.js";import"./iteratee-CPGn8MN2.js";import"./Cross-C-VozEOs.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
