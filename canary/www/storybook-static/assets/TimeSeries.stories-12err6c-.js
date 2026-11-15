import{R as e}from"./iframe-CVlx7bU_.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DMF0oTJ1.js";import{R as h}from"./zIndexSlice-CQ18OEDz.js";import{C as g}from"./ComposedChart-Dp5ziSq3.js";import{L as x}from"./Line-coLulIXR.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CkwZs2c8.js";import{T as V}from"./Tooltip-D54drNp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./resolveDefaultProps-7sOSs16A.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./Label-DOtvRCj8.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./throttle-CmXgXLjc.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BJrugk6A.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./Curve-ByMphQa4.js";import"./step-B-eN0hXo.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CMoIO_lw.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./activeStyles-5RuXhDxF.js";import"./useAnimationId-JkE7TXZo.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./ErrorBarContext-DzVhOjsh.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-EkJHXXuk.js";import"./Rectangle-BzACz78L.js";import"./util-Dxo8gN5i.js";import"./Sector-DIaGg7Xj.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
