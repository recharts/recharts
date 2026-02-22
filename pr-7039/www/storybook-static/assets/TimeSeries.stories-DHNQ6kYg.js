import{e}from"./iframe-BAkhr1dX.js";import{X as s}from"./XAxis-DFbVQKiI.js";import{R as y}from"./arrayEqualityCheck-ws_I-Su9.js";import{C as g}from"./ComposedChart-Dktxrbto.js";import{L as x}from"./Line-BedHLVHg.js";import{R as S}from"./RechartsHookInspector-CZGFYlgB.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-D4vzySek.js";import{T as V}from"./Tooltip-MyynS2WL.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DhYmi_Op.js";import"./Layer-ChOUaBRc.js";import"./resolveDefaultProps-CNqTx6xA.js";import"./Text-DEUhZcIO.js";import"./DOMUtils-B-z1kise.js";import"./Label-C63pHtg-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9oqm7-r.js";import"./zIndexSlice-DySAbts1.js";import"./immer-CpzDDdx2.js";import"./types-UutyoBzA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-KIutDziH.js";import"./hooks-BQ6EMEQX.js";import"./axisSelectors-5IeRVjyJ.js";import"./RechartsWrapper-C6vYGZxV.js";import"./index-Cogrk3y-.js";import"./CartesianChart-JKhVhhuI.js";import"./chartDataContext-BxZ2tnlW.js";import"./CategoricalChart-BEpc5Jb6.js";import"./ReactUtils-CLeHX5Ip.js";import"./ActivePoints-CD0GXcpd.js";import"./Dot-JL6yZKot.js";import"./RegisterGraphicalItemId-BbgywdL0.js";import"./ErrorBarContext-DGlqNFZc.js";import"./GraphicalItemClipPath-wygGc-U-.js";import"./SetGraphicalItem-D74ae6eQ.js";import"./useAnimationId-DpHYdy2q.js";import"./getRadiusAndStrokeWidthFromDot-BlTIAy7U.js";import"./ActiveShapeUtils-xtyk6YAI.js";import"./isPlainObject-_51Ij8KQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGk7C1pp.js";import"./Trapezoid-XKQAH1TM.js";import"./Sector-CoTacwlm.js";import"./Symbols-BpFdmF0L.js";import"./symbol-BeaTf5eH.js";import"./step-BqWOfOpT.js";import"./Curve-oAmAnVW8.js";import"./index-CEM5lfG1.js";import"./ChartSizeDimensions-DS99mPzw.js";import"./OffsetShower-BN9FCNNs.js";import"./PlotAreaShower-DjsLqly8.js";import"./useElementOffset-CuiNFhqY.js";import"./uniqBy-YrSyAgcX.js";import"./iteratee-BdXy5IcI.js";import"./Cross-DVKTPZwv.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
