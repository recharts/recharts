import{R as e}from"./iframe-B89lyy_-.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CSc3N7hL.js";import{R as h}from"./zIndexSlice-BefUx2Nd.js";import{C as g}from"./ComposedChart-BsssixLG.js";import{L as x}from"./Line-_gevD_1B.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BgC9WZfP.js";import{T as V}from"./Tooltip-DeSzgcGm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./resolveDefaultProps-CABzBelW.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./Label-C15axuMc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./throttle-BZuMAyb2.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DR4qXUjK.js";import"./RechartsWrapper-VgXxR9hf.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./Curve-3TxFGWdO.js";import"./step-BRjfFT26.js";import"./path-DyVhHtw_.js";import"./LabelList-6ZaFDz_R.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./activeStyles-CQvoijJ0.js";import"./useAnimationId-CrfHw1CS.js";import"./dataEntryStyles-C4pyloN-.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./ErrorBarContext-CHzFixYj.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-DD1T0fU1.js";import"./uniqBy-QREi1o1G.js";import"./iteratee-Dd6IP1KA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bx7xKlIX.js";import"./Rectangle-CXq2cdeR.js";import"./util-Dxo8gN5i.js";import"./Sector-DS2QQ-iw.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
