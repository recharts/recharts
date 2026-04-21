import{e}from"./iframe-DyvFbeiY.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B293BcKI.js";import{R as y}from"./arrayEqualityCheck-Bn5wKa8z.js";import{C as g}from"./ComposedChart-DfTxnUhc.js";import{L as x}from"./Line-Dwikz1-j.js";import{R as S}from"./RechartsHookInspector-DV82AArc.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CNJHznva.js";import{T as V}from"./Tooltip-DqF6pQE3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DvrkT7dv.js";import"./Layer-CpTA_ktM.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./Label-CDXCniHM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1288rIw.js";import"./zIndexSlice-Bqm6vulu.js";import"./immer-BXVzTfKp.js";import"./types-CSsXZ5tJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CJenSa8J.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./ReactUtils-COq0Y09w.js";import"./ActivePoints-Ci7sTbDq.js";import"./Dot-RjdCxHU2.js";import"./RegisterGraphicalItemId-B9D6uPLZ.js";import"./ErrorBarContext-DayA8Agl.js";import"./GraphicalItemClipPath-CYHMq85Z.js";import"./SetGraphicalItem-DiBnTnci.js";import"./useAnimationId-DwaEpfhV.js";import"./getRadiusAndStrokeWidthFromDot-Ce9nLJu3.js";import"./ActiveShapeUtils-BcQiGKd0.js";import"./isPlainObject-CQyTvYqF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ddgym3Wn.js";import"./Trapezoid-vyL8C7j7.js";import"./Sector-DWMmtBrv.js";import"./Symbols-Be2vj1mX.js";import"./symbol-BvP6gztC.js";import"./step-CqS1DS8s.js";import"./Curve-BctzKEO8.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";import"./useElementOffset-DDSbv75U.js";import"./uniqBy-fbRu4jMx.js";import"./iteratee-DBFGwJC_.js";import"./Cross-m0Nu02Dx.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
