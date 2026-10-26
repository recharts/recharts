import{R as e}from"./iframe-DPP4Tdri.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BpxUBGxx.js";import{R as h}from"./zIndexSlice-Bty8FlsF.js";import{C as g}from"./ComposedChart-CXeRVVMY.js";import{L as x}from"./Line-D2KFCdB_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DzX31dlW.js";import{T as V}from"./Tooltip-DZD5XPLv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./Text-BtmpD8Z5.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./Label-VwhFHh0o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CClqMsSX.js";import"./throttle-vvUvRomY.js";import"./dataEntryStyles-CptsKKQm.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D5c_jQLf.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./Curve-B2UCYZoR.js";import"./step-3axEj_2-.js";import"./path-DyVhHtw_.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./ActivePoints-DKXQv37u.js";import"./Dot-9cI0fI12.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getRadiusAndStrokeWidthFromDot-CNoHTcoN.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./useElementOffset-DETypLP1.js";import"./uniqBy-B9BTqrOm.js";import"./iteratee-b2KlmUpP.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DEZ6Na26.js";import"./Rectangle-CYtgedmy.js";import"./util-Dxo8gN5i.js";import"./Sector-BoCQu8KL.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
