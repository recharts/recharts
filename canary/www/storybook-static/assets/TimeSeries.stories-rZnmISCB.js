import{e}from"./iframe-N_BxlBi6.js";import{X as s}from"./XAxis-kOfNYCLV.js";import{R as y}from"./arrayEqualityCheck-CEf0Nn8K.js";import{C as g}from"./ComposedChart-CWKNFmv2.js";import{L as x}from"./Line-CcaUDWqS.js";import{R as S}from"./RechartsHookInspector-DfDmhGgp.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DrFqqVTo.js";import{T as V}from"./Tooltip-BngbLdpV.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bz8y1rju.js";import"./Layer-BGFLosQF.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./Label-DSedETU8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4oG6gqW.js";import"./zIndexSlice-Dwnmzy4_.js";import"./immer-m4imqOCY.js";import"./types-BHZ13L2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-grNcr2K9.js";import"./hooks-DU7HquZl.js";import"./axisSelectors-BasHfAyu.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./ReactUtils-Bc5QD6WP.js";import"./ActivePoints-BdX8YxXH.js";import"./Dot-B-WJq94W.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./useAnimationId-CZd_sIsZ.js";import"./getRadiusAndStrokeWidthFromDot-B0bkRdWl.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./Curve-BzBcZROj.js";import"./index-PFvsiB8w.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./OffsetShower-_4Zo9ctC.js";import"./PlotAreaShower-DcYSYMnm.js";import"./useElementOffset-drVnHBTv.js";import"./uniqBy-ClVVrVdj.js";import"./iteratee-T_aYBY_u.js";import"./Cross-C3Wo_HEi.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
