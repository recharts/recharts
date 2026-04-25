import{e}from"./iframe-BtT0SffI.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DXJhdPvR.js";import{R as y}from"./arrayEqualityCheck-CUZpg3gX.js";import{C as g}from"./ComposedChart-Bz4spIYG.js";import{L as x}from"./Line-CancUYtT.js";import{R as S}from"./RechartsHookInspector-CB7j-2_m.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-Crn8UFeD.js";import{T as V}from"./Tooltip-CuezloXc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-By19jgIb.js";import"./Layer-C7tDoNBc.js";import"./resolveDefaultProps-D8J53oj2.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./Label-DMCJfrwq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./zIndexSlice-EIyEPPia.js";import"./immer-BbVrPebv.js";import"./types-mmIvaWnd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./ReactUtils-BK_CWQIO.js";import"./ActivePoints-cSdEfonb.js";import"./Dot-4SrqtSKy.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./ErrorBarContext-ClxAS9vu.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./useAnimationId-Dq1v2kj_.js";import"./getRadiusAndStrokeWidthFromDot-SP98bMI8.js";import"./ActiveShapeUtils-qAI1kzWp.js";import"./isPlainObject-DlgbpHVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DihoywZ_.js";import"./Trapezoid-CtXqEzYB.js";import"./Sector-BupA_fFM.js";import"./Symbols-Bh8GvTwl.js";import"./symbol-BNo9YZcN.js";import"./step-B__dH_Lt.js";import"./Curve-BjgRzFMd.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";import"./useElementOffset-4EhrUaEt.js";import"./uniqBy-DpQ-3Wwt.js";import"./iteratee-BTq1FiMa.js";import"./Cross-BJxWFUg8.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
