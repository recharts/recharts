import{e}from"./iframe-Cm3fKKya.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-_gagIVgp.js";import{R as y}from"./arrayEqualityCheck-CQWVDseH.js";import{C as g}from"./ComposedChart-CI7e_WTM.js";import{L as x}from"./Line-CUx7_hG8.js";import{R as S}from"./RechartsHookInspector-CpOXiD6O.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BjMiYTJr.js";import{T as V}from"./Tooltip-DNGuo1m5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DUjBj8lo.js";import"./Layer-Bjej1AmV.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./Label-DcJ8tF7g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./zIndexSlice-DYSMWhOl.js";import"./immer-CEWtNvyb.js";import"./types-Cdoht-KM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./hooks-B3tRCSat.js";import"./axisSelectors-Bwtc5iq4.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./ReactUtils-CCKIvuk2.js";import"./ActivePoints-XXtVAAS1.js";import"./Dot-elfvXfLw.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./useAnimationId-C78FuYWX.js";import"./getRadiusAndStrokeWidthFromDot-D5QROXAR.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./Curve-C9IFio54.js";import"./index-DsjXiXu7.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./OffsetShower-Be6n4fO7.js";import"./PlotAreaShower-DRAX5UGP.js";import"./useElementOffset-DSmvd2Je.js";import"./uniqBy-BhwEwJ-s.js";import"./iteratee-BKobvmlS.js";import"./Cross-DA5JVAUA.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
