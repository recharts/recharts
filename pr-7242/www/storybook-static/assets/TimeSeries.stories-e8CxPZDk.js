import{e}from"./iframe-DvnDov4A.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C1tPrrXX.js";import{R as y}from"./arrayEqualityCheck-C9lnY2Jk.js";import{C as g}from"./ComposedChart-Dakl-_yO.js";import{L as x}from"./Line-CMGNV9p3.js";import{R as S}from"./RechartsHookInspector-4zpoQdEh.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BcO2Qy0K.js";import{T as V}from"./Tooltip-9w79gXLX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DShCHaKT.js";import"./Layer-nkTMaplG.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./Label-DplSYrhy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CM0jcixQ.js";import"./zIndexSlice-SWDQ-CoV.js";import"./immer-sZpCrch2.js";import"./types-TD_Bh_Hf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-031iG6wN.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./ReactUtils-CIfEwxbL.js";import"./ActivePoints-Bp_xfLdA.js";import"./Dot-1PiERTp-.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./ErrorBarContext-CvFDt4Lo.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./useAnimationId-6CABSB-X.js";import"./getRadiusAndStrokeWidthFromDot-ZR3HPK81.js";import"./ActiveShapeUtils-lzwBTbm9.js";import"./isPlainObject-Bm-7eQPN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7q3XGzAF.js";import"./Trapezoid-D2p22PjP.js";import"./Sector-bYTZ9FBx.js";import"./Symbols-D2whzrea.js";import"./symbol-B4kl7GNn.js";import"./step-hQY7d3_H.js";import"./Curve-BY4G9kL5.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";import"./useElementOffset-7HbT1_o2.js";import"./uniqBy-CWXY7iXU.js";import"./iteratee-CEA0pmlV.js";import"./Cross-W0td6AIJ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
