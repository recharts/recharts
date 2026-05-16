import{e}from"./iframe-hEzUtsMW.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-CmasoGgc.js";import{g as y}from"./arrayEqualityCheck-x5atMu4i.js";import{C as g}from"./ComposedChart-DIb01qKn.js";import{L as x}from"./Line-Bw4keAE2.js";import{R as S}from"./RechartsHookInspector-HGLK2tN5.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-D4Rky8AA.js";import{T as V}from"./Tooltip-BMhVT1Qy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DW2tMO5n.js";import"./Layer-BzjUvoq3.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./Label-DAj1mr9j.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2roQss2.js";import"./zIndexSlice-C-CqVCIy.js";import"./immer-D2mt-X_3.js";import"./types-CIvV1oOa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./hooks-BpIGMeVK.js";import"./axisSelectors-DpQuKI8d.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./ReactUtils-CILnJ9bI.js";import"./ActivePoints-BEj7A802.js";import"./Dot-DjJx9Xmg.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./ErrorBarContext-BKh5vOop.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./useAnimationId-nSTPw_c2.js";import"./getRadiusAndStrokeWidthFromDot-ZgYi_nYk.js";import"./ActiveShapeUtils-CvZRJyk9.js";import"./isPlainObject-XAJ6_CVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrXQ0ZF2.js";import"./Trapezoid-CP7Jy4rV.js";import"./Sector-DZ1bqHIH.js";import"./Symbols-DpJ4BPQH.js";import"./symbol-Bv6t7YtK.js";import"./step-nV8fFjWt.js";import"./Curve-DljUrqTb.js";import"./index-umLltmbH.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./OffsetShower-ChvlcA1R.js";import"./PlotAreaShower-kf7JFG6K.js";import"./useElementOffset-DIirkKhH.js";import"./uniqBy-BMKJIO4n.js";import"./iteratee-HN1CE_6M.js";import"./Cross-D1Ep2_gT.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
