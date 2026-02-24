import{e}from"./iframe-zwlZ9sO1.js";import{X as s}from"./XAxis-CnAuA4rg.js";import{R as y}from"./arrayEqualityCheck-CJjag0zJ.js";import{C as g}from"./ComposedChart-B-ZDBPB-.js";import{L as x}from"./Line-CfwUAClX.js";import{R as S}from"./RechartsHookInspector-DHSpqDma.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-5RI03Ty3.js";import{T as V}from"./Tooltip-C4PzfPF3.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis--bPf-qQg.js";import"./Layer-BoZ3FYfy.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DApcsQWW.js";import"./zIndexSlice-oDtJWVOP.js";import"./immer-BiA4uk1x.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./ReactUtils-KsuQNZ47.js";import"./ActivePoints-DGPPefSL.js";import"./Dot-D8W5fYzP.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./ErrorBarContext-D80HzYFV.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./useAnimationId-BwEUZfoI.js";import"./getRadiusAndStrokeWidthFromDot-DJU7uBWj.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./step-DUUdO3U1.js";import"./Curve-D-syDesq.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";import"./useElementOffset--1_J6-2R.js";import"./uniqBy-1QvvVmO8.js";import"./iteratee-BbsKG0i1.js";import"./Cross-Dq7ZRpxr.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
