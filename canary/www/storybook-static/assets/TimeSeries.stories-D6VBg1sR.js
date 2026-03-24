import{e}from"./iframe-BO25Fukk.js";import{X as s}from"./XAxis-DX4QFDJP.js";import{R as y}from"./arrayEqualityCheck-8wdJ7bOW.js";import{C as g}from"./ComposedChart-CF-2nekN.js";import{L as x}from"./Line-Bi0Ivg5j.js";import{R as S}from"./RechartsHookInspector-y6KR2L3P.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CRavCQeQ.js";import{T as V}from"./Tooltip-BkG2r77U.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BRmvxIOe.js";import"./Layer-D1wKq7sO.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./Label-OvGfCgyV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjFFXD-n.js";import"./zIndexSlice-rXbN18td.js";import"./immer-3Wb7zWXo.js";import"./types-Z8gV0TDw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./hooks-BpctELEd.js";import"./axisSelectors-Dte6k_F-.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./ReactUtils-CylM5YpB.js";import"./ActivePoints-BcnF-Bb_.js";import"./Dot-Dgz_5xVA.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./useAnimationId-DPvU_ojd.js";import"./getRadiusAndStrokeWidthFromDot-pfV1rYdW.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./index-BQMezaYM.js";import"./ChartSizeDimensions-fwZ9XifO.js";import"./OffsetShower-DKjDo15d.js";import"./PlotAreaShower-CI8tEgs8.js";import"./useElementOffset-DNA5shck.js";import"./uniqBy-BVTfaSFn.js";import"./iteratee-C_6D29Qz.js";import"./Cross-CAwC-V0A.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
