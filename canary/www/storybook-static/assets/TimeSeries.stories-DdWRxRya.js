import{R as e}from"./iframe-DtzldFfh.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BY5CXCjh.js";import{R as h}from"./zIndexSlice-PhkkSvay.js";import{C as g}from"./ComposedChart-C0Pw1zvu.js";import{L as x}from"./Line-BvNBRL71.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BmMEJmfI.js";import{T as V}from"./Tooltip-CXQtUWKg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./resolveDefaultProps-u2nTClVy.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./Label-DAuHelmL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./throttle-Drk_UoQx.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-C2izPxUf.js";import"./RechartsWrapper-RpB-MHrg.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./Curve-xzGpqU4W.js";import"./step-Dbgt0c4J.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-kT4_La43.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./activeStyles-BesdgLFE.js";import"./useAnimationId-Dzlg4g7S.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./ErrorBarContext-CFgTAQbG.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D_bufb52.js";import"./Rectangle-sBf3lxLL.js";import"./util-Dxo8gN5i.js";import"./Sector-CK9Jq0GA.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
