import{R as e}from"./iframe-0XL0sthS.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-8dcEWD9_.js";import{R as h}from"./zIndexSlice-C9Fui9SZ.js";import{C as g}from"./ComposedChart-Deu_CMYg.js";import{L as x}from"./Line-BgTy5bbd.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D8BAYDAt.js";import{T as V}from"./Tooltip-CfUheZOT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-P0zAs4bB.js";import"./Layer-3mPd111u.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./Label-CuZoViK1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./throttle-Dos2q2R1.js";import"./dataEntryStyles-jYd5_Tui.js";import"./types-B6SF8UCq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CET1BM1x.js";import"./RechartsWrapper-B-mX6d9D.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Curve-B4Yxq0yJ.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./LabelList-Bxms0g1E.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./useElementOffset-BydIrxuW.js";import"./uniqBy-DSUFf6NQ.js";import"./iteratee-C_ZjvgJo.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B9nRaxtb.js";import"./Rectangle-Cwefqyhe.js";import"./util-Dxo8gN5i.js";import"./Sector-B2k3IPvz.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
