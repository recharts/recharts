import{R as e}from"./iframe-B5EBEutQ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-C0OgGT6V.js";import{R as h}from"./zIndexSlice-BS5hvVSM.js";import{C as g}from"./ComposedChart-BL8Vy27a.js";import{L as x}from"./Line-CtFf5VG7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-iNRnE1hH.js";import{T as V}from"./Tooltip-C4-fT2EA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-7YbWTN27.js";import"./Layer-BYAjyABW.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./Text-BVXkgzAF.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./Label-Bho88syw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./throttle-B9WW5VMA.js";import"./types-BmtCPhIx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CLoHgdoC.js";import"./RechartsWrapper-BC-brhau.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./Curve-Di7q2eVu.js";import"./step-DSuuF4zz.js";import"./path-DyVhHtw_.js";import"./LabelList-BsIU2Cho.js";import"./ActivePoints-GUWB2UUS.js";import"./Dot-DmpikD8L.js";import"./activeStyles-CuQ8L2cy.js";import"./useAnimationId-5jS9WdgM.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./ErrorBarContext-dLbqY2mz.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getRadiusAndStrokeWidthFromDot-BJYN0Za2.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./useEffectiveDataKey-BNkN63Yq.js";import"./useElementOffset-5ftWeo_0.js";import"./uniqBy-tVD2kZAe.js";import"./iteratee-Cg-J5YFs.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CMwNYQDS.js";import"./Rectangle-BZKbEhjO.js";import"./util-Dxo8gN5i.js";import"./Sector-D9Oq45ev.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
