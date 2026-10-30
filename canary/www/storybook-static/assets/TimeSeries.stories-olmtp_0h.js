import{R as e}from"./iframe-C1szs8Ge.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-DAR-gQPA.js";import{R as h}from"./zIndexSlice-2Z2wgmDW.js";import{C as g}from"./ComposedChart-CENNwY7-.js";import{L as x}from"./Line-BHGjXSGr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D4TUcbxA.js";import{T as V}from"./Tooltip-CuajHWD2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./resolveDefaultProps-CIiYtXni.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./Label-DKy-t54T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./throttle-BnhEbDBT.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D9npcJPs.js";import"./RechartsWrapper-xd3kaPdN.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./Curve-BGMmiUdq.js";import"./step-CEIdKdZW.js";import"./path-DyVhHtw_.js";import"./LabelList-iP8lFrAf.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./activeStyles-CqRrjByh.js";import"./useAnimationId-Cg9ej0wY.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./ErrorBarContext-C-G-Mak5.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D0i44YDT.js";import"./Rectangle-Qa1VLo8n.js";import"./util-Dxo8gN5i.js";import"./Sector-4Lf6e-B4.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
