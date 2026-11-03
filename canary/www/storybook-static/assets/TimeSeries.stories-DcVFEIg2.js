import{R as e}from"./iframe-C4yajH80.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BFxxSACP.js";import{R as h}from"./zIndexSlice-BfiJerBV.js";import{C as g}from"./ComposedChart-Drcu9Hk1.js";import{L as x}from"./Line-B3Ju-sFB.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-fBzFIMPy.js";import{T as V}from"./Tooltip-C3r4dDMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CiDuuMHX.js";import"./Layer-D0yKuovh.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./Text-Bi36EJ7d.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./Label-B6ownNND.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./throttle-A9at9acq.js";import"./types-CL_v27h0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-C4wAO8K7.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./Curve-fl7qnDBk.js";import"./step-I8SAqNm5.js";import"./path-DyVhHtw_.js";import"./LabelList-C_dQABL5.js";import"./ActivePoints-Ve6xkJ_B.js";import"./Dot-CrVSKUlv.js";import"./activeStyles-DvcaieBh.js";import"./useAnimationId-BUxfS1h6.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./ErrorBarContext-ELy3xUI7.js";import"./SetGraphicalItem-aXzYe790.js";import"./getRadiusAndStrokeWidthFromDot-BI02GC_O.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./useElementOffset-jHj6xKf0.js";import"./uniqBy-B9zpECzU.js";import"./iteratee-Cick1OQS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CJWJdMdd.js";import"./Rectangle-Co2_9m8t.js";import"./util-Dxo8gN5i.js";import"./Sector-CnqTZ0oD.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
