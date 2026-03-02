import{e}from"./iframe-VPJyTU3C.js";import{X as s}from"./XAxis-3pLP0gWY.js";import{R as y}from"./arrayEqualityCheck-CXN3l8IH.js";import{C as g}from"./ComposedChart-BcIOapvV.js";import{L as x}from"./Line-YSIAJHaU.js";import{R as S}from"./RechartsHookInspector-vDuc6y-U.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DGhAz-7E.js";import{T as V}from"./Tooltip-BzCxYluY.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CiyiTEma.js";import"./Layer-7CDZtGSl.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./Label-9AdH7Mzz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./zIndexSlice-Dq9melht.js";import"./immer-BfJiACOe.js";import"./types-CXB2nDIk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./ReactUtils-DXFU76qs.js";import"./ActivePoints-BG43CjVF.js";import"./Dot-DKFvoc5_.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./ErrorBarContext-DWym-0i0.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./useAnimationId-83t5rQCc.js";import"./getRadiusAndStrokeWidthFromDot-CLsj08-5.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./Trapezoid-CegYn91N.js";import"./Sector-CrGccqha.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./step-AwB8z33l.js";import"./Curve-C7OUetYn.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";import"./useElementOffset-BpCcqtji.js";import"./uniqBy-BL8b2woc.js";import"./iteratee-DStFB318.js";import"./Cross-Q_a0JLSZ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
