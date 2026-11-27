import{R as e}from"./iframe-WNWxHA5w.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DfMY5qBP.js";import{R as h}from"./zIndexSlice-BVgHV45y.js";import{C as g}from"./ComposedChart-DpKMEvwE.js";import{L as x}from"./Line-lsf5adcu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-zFOgTZT_.js";import{T as V}from"./Tooltip-Bx7RtV8V.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./Label-CezBD4yi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CgU14Zha.js";import"./throttle-DWlA00LM.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DqPRQxzX.js";import"./RechartsWrapper-MLPBuzwi.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./Curve-aBjBuLLa.js";import"./step-QSf3RYd6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./activeStyles-CeKhNTWp.js";import"./useAnimationId-PYVmWLIg.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BVtygh5W.js";import"./Rectangle-bHpKFJEG.js";import"./util-Dxo8gN5i.js";import"./Sector-CTWU1_bF.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
