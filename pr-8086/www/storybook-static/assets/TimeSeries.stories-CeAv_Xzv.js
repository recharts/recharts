import{R as e}from"./iframe-BK3Sisey.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DZM3ZRq3.js";import{R as h}from"./zIndexSlice-BetgAyCc.js";import{C as g}from"./ComposedChart-D1QZxiQE.js";import{L as x}from"./Line-XxjUVcCS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bzw5IHoB.js";import{T as V}from"./Tooltip-DziaoSJI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DZgjpOyW.js";import"./Layer-D1HH46xf.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./Label-UVuQgYwr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./throttle-biJe8rDV.js";import"./dataEntryStyles-B4V6KkDF.js";import"./types-DkavCTl8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BspbFoiI.js";import"./RechartsWrapper-DORC7p_L.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./activeStyles-Tawg351V.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./useElementOffset-C7iIcJbq.js";import"./uniqBy-Bso09DYT.js";import"./iteratee-Bfjg1LJA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dxo8y2Lo.js";import"./Rectangle-BNfPDvJT.js";import"./util-Dxo8gN5i.js";import"./Sector-vXpxhJQs.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
