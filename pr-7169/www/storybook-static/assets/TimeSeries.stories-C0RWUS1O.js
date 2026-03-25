import{e}from"./iframe-CB4rwuoz.js";import{X as s}from"./XAxis-DCt1RS6w.js";import{R as y}from"./arrayEqualityCheck-B0sfDo8e.js";import{C as g}from"./ComposedChart-YoWdVHlU.js";import{L as x}from"./Line-0O1iT2mF.js";import{R as S}from"./RechartsHookInspector-c3RyaB9m.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BjYlm7DL.js";import{T as V}from"./Tooltip-CbV8c3wz.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CMMIwY9U.js";import"./Layer-CF-S8dmg.js";import"./resolveDefaultProps-aRufe_6H.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./Label-C4bu2feL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./zIndexSlice-CX5pCWFs.js";import"./immer-BWNyrJnU.js";import"./types-CgQDsaUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./ReactUtils-BKtMub4g.js";import"./ActivePoints-CemCp_OZ.js";import"./Dot-Dh6sbB0Q.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./ErrorBarContext-C9ucf0NL.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./useAnimationId-CLj3uDOB.js";import"./getRadiusAndStrokeWidthFromDot-BcBCYhRo.js";import"./ActiveShapeUtils-CXBvI7fg.js";import"./isPlainObject-ExidMtfN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BToq8Jht.js";import"./Trapezoid-oQAH4GDD.js";import"./Sector-C4kas-8x.js";import"./Symbols-CMdoO83a.js";import"./symbol-C980TeYk.js";import"./step-BgqYgAla.js";import"./Curve-DX-WNmjD.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";import"./useElementOffset-K5yP77dM.js";import"./uniqBy-BiWECRxk.js";import"./iteratee-_24P-b58.js";import"./Cross-fgYQklRZ.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
