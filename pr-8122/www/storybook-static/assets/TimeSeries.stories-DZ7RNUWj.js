import{R as e}from"./iframe-C478ayfe.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CU4ivSNq.js";import{R as h}from"./zIndexSlice-T3ZFb7Aa.js";import{C as g}from"./ComposedChart-DISnWYF6.js";import{L as x}from"./Line-CGbNyLDk.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cz0p_M0k.js";import{T as V}from"./Tooltip-DRflteeY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./Text-rWn3Xmx5.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./Label-yNY_-txU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CAckEIKE.js";import"./throttle-B99v42cc.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Biv-SyAO.js";import"./RechartsWrapper-D6tIgYO1.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./Curve-BR7rWdNb.js";import"./step-5qm5cD0x.js";import"./path-DyVhHtw_.js";import"./LabelList-CXPk-iUW.js";import"./ActivePoints-CRj_seyq.js";import"./Dot-BEwirPZP.js";import"./activeStyles-BTHRjD5i.js";import"./useAnimationId-DsdBvcVE.js";import"./dataEntryStyles-DLRWmObc.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./ErrorBarContext-Cxtks1NA.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getRadiusAndStrokeWidthFromDot-0vkflCw5.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-BEuMbuoA.js";import"./uniqBy-kU7oDpQ6.js";import"./iteratee-bJQZKjxj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-LboJznFC.js";import"./Rectangle-DvnRkiIM.js";import"./util-Dxo8gN5i.js";import"./Sector-BrpLJe1k.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
