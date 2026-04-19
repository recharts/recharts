import{e}from"./iframe-RBDhNuvY.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DanSQFXO.js";import{R as y}from"./arrayEqualityCheck-BS348k5r.js";import{C as g}from"./ComposedChart-amLhCzW6.js";import{L as x}from"./Line-BcjxrMGm.js";import{R as S}from"./RechartsHookInspector-DOfZr9C1.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-D1n_szfL.js";import{T as V}from"./Tooltip-DZ8kOMmN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BomHuY_r.js";import"./Layer-u__8P6Sj.js";import"./resolveDefaultProps-BY9krx0N.js";import"./Text-ksXr8HZ7.js";import"./DOMUtils-CPBkTdDQ.js";import"./Label-R4J1fJpi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bft7LqoW.js";import"./zIndexSlice-D1BncfDi.js";import"./immer-C4c_Wnmh.js";import"./types-bb6aQwNz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-zElQoHGi.js";import"./hooks-CGOwSC0e.js";import"./axisSelectors-BWB9zPfa.js";import"./RechartsWrapper-pTvawuVp.js";import"./index-DTbqq10f.js";import"./CartesianChart-CvfrETq8.js";import"./chartDataContext-CHNtAjFy.js";import"./CategoricalChart-DfYiu2DH.js";import"./ReactUtils-2aoVptM5.js";import"./ActivePoints-CWeKESIY.js";import"./Dot-D4355bFc.js";import"./RegisterGraphicalItemId-Nj3D91YX.js";import"./ErrorBarContext-CdH3aE4v.js";import"./GraphicalItemClipPath-DADrCLWg.js";import"./SetGraphicalItem-n97qV-yJ.js";import"./useAnimationId-Dwr1YxhS.js";import"./getRadiusAndStrokeWidthFromDot-Kev9_BfR.js";import"./ActiveShapeUtils-Bog2Lcip.js";import"./isPlainObject-Do42GsO_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWX_qciT.js";import"./Trapezoid-DJVnFGas.js";import"./Sector-HpIE4-5_.js";import"./Symbols-CumYzi7M.js";import"./symbol-Dd7u_zBc.js";import"./step-B8I79wVl.js";import"./Curve-D-xIgRTC.js";import"./index-DrnbXucV.js";import"./ChartSizeDimensions-CoDDlzmV.js";import"./OffsetShower-CNAox3ML.js";import"./PlotAreaShower-BuNBetuA.js";import"./useElementOffset-CxnBNmaX.js";import"./uniqBy-B88yBfPS.js";import"./iteratee-d0U_P1Ds.js";import"./Cross-5bEvXyOJ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
