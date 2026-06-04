import{R as e}from"./iframe-Bzk7zQca.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BwFTdCod.js";import{R as h}from"./zIndexSlice-CmFEWq1r.js";import{C as g}from"./ComposedChart-BwJ5t2t4.js";import{L as x}from"./Line-D_KoWL_N.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-MuAf3A9e.js";import{T as V}from"./Tooltip-eenNtxQb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CihDQax7.js";import"./CartesianAxis-BuH3LaY7.js";import"./Layer-C58in0aX.js";import"./resolveDefaultProps-CJmyog69.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./Label-CTPsCXr1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxzvrsVM.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./types-BYFlfVWD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./immer-CcXYFoUI.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./axisSelectors-BZF8A_qV.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Curve-QDW-Shr1.js";import"./step-BsT6z54w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bm1dVVre.js";import"./useAnimationId-3u1Yr1gs.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BuHZiJPV.js";import"./Dot-CLahKtoI.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getRadiusAndStrokeWidthFromDot-CmnydJOh.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./useElementOffset-C3YrErby.js";import"./uniqBy-20cDpXHs.js";import"./iteratee-BHx8gBfP.js";import"./Cross-D4MdnFGN.js";import"./Rectangle-CDk6Iz6Z.js";import"./Sector-DHvxyLBb.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
