import{R as e}from"./iframe-sVYf0T4K.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DBp8xvXF.js";import{R as h}from"./zIndexSlice-DCYn61_Z.js";import{C as g}from"./ComposedChart-79IdZ4r_.js";import{L as x}from"./Line-ChZJFWD1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CaVFs3zj.js";import{T as V}from"./Tooltip-lnOD4kE7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BI1VsAr7.js";import"./Layer-BIjeoEg2.js";import"./resolveDefaultProps-BNjxkguA.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./Label-DWNcL86V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./throttle-B5u3GWWh.js";import"./dataEntryStyles-4CyLqaB1.js";import"./types-ZHVwXJa3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DeiSy_-h.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./Curve-DRJ9KjAo.js";import"./step-DuwXt4tv.js";import"./path-DyVhHtw_.js";import"./activeStyles-BGq7qwld.js";import"./useAnimationId-D71D5MAL.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DbRi0_-s.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./Sector-CUgX515f.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
