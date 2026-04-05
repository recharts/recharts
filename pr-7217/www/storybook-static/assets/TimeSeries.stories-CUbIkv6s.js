import{e}from"./iframe-BM7P_3hj.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C_LpUhcR.js";import{R as y}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{C as g}from"./ComposedChart-EZo1iYMi.js";import{L as x}from"./Line-CHs41JOZ.js";import{R as S}from"./RechartsHookInspector-DIlL8ISE.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-B0w3FH9e.js";import{T as V}from"./Tooltip-C8QZFWX9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BrBA7Fo6.js";import"./Layer-C6LffHMU.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./Label-BQD1_uHZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7eOOyk7.js";import"./zIndexSlice-jDjA289q.js";import"./immer-D-2u7HXy.js";import"./types-o-wQVJEv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./ReactUtils-DyDnYFSa.js";import"./ActivePoints-CM_0l3Rg.js";import"./Dot-C4-mkX5o.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./ErrorBarContext-8JrkuwkP.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./useAnimationId-CDf7Yg_k.js";import"./getRadiusAndStrokeWidthFromDot-BxdGbl3w.js";import"./ActiveShapeUtils-CpIbOFBd.js";import"./isPlainObject-D_XY9Qvh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-UEK_zsFS.js";import"./Trapezoid-tkh2Io-M.js";import"./Sector-B2gfW0gr.js";import"./Symbols-PsAIzTU_.js";import"./symbol-BXNRxpVN.js";import"./step-DyBB5gGy.js";import"./Curve-CqITwbJh.js";import"./index-BpI1Zh7a.js";import"./ChartSizeDimensions-75IDTK2b.js";import"./OffsetShower-BvXPFVVi.js";import"./PlotAreaShower-Cu3BCYLx.js";import"./useElementOffset-DP9By8L-.js";import"./uniqBy-CvtKv9kX.js";import"./iteratee-CcJgzovy.js";import"./Cross-BBfQruFy.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
