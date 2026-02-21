import{e}from"./iframe-BJOlw-Op.js";import{X as s}from"./XAxis-43KHVoFo.js";import{R as y}from"./arrayEqualityCheck-DnusCzBD.js";import{C as g}from"./ComposedChart-CscrYVRt.js";import{L as x}from"./Line-l144VTnQ.js";import{R as S}from"./RechartsHookInspector-CPO0M8Xx.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-DYbsxYoA.js";import{T as V}from"./Tooltip-CNVqS8XJ.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Y6m8iiHs.js";import"./Layer-BBwqN8Jm.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./Label-D8He3MwY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYremzN-.js";import"./zIndexSlice-CeiBfx4M.js";import"./immer-DfiRd44R.js";import"./types-CnF3ZZeT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BL6GofNb.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./RechartsWrapper-BHn8DA_q.js";import"./index-Qcq4P_Nt.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./ReactUtils-BfARamF_.js";import"./ActivePoints-CHOum2cR.js";import"./Dot-DwKpvT0b.js";import"./RegisterGraphicalItemId-Dp1CPZih.js";import"./ErrorBarContext-DQMcR9jZ.js";import"./GraphicalItemClipPath-EzqtyZLV.js";import"./SetGraphicalItem-BPcUI2au.js";import"./useAnimationId-C14qPNnG.js";import"./getRadiusAndStrokeWidthFromDot-BomTk5Ge.js";import"./ActiveShapeUtils-CbtKb807.js";import"./isPlainObject-D466DHg4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vSj0lbmg.js";import"./Trapezoid-DFU8e3Ta.js";import"./Sector-CGzr-x9r.js";import"./Symbols-rjn2Khx8.js";import"./symbol-DL0oUuW8.js";import"./step-DgvGX9zV.js";import"./Curve-pTrnSDAj.js";import"./index-D9yuPKYy.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";import"./useElementOffset-duskTvdV.js";import"./uniqBy-DFQ4Efts.js";import"./iteratee-BdafbVaq.js";import"./Cross-zMJlw_J0.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
