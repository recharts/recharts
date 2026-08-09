import{R as e}from"./iframe-CMWK1RnV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DWpQtd1t.js";import{R as h}from"./zIndexSlice-BytvSaR0.js";import{C as g}from"./ComposedChart-C24U-VBD.js";import{L as x}from"./Line-DfXl_x5M.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CPniq2Ig.js";import{T as V}from"./Tooltip-B_R48we7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B04cLUP1.js";import"./Layer-CCdAbzHQ.js";import"./resolveDefaultProps-phMwPKZe.js";import"./Text-CsZIDzps.js";import"./DOMUtils-BcIZbNLs.js";import"./isWellBehavedNumber-CyyUOQdm.js";import"./Label-D4xT1rG9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaLkAJUw.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./types-ClsmN4lT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-X6zEnROV.js";import"./throttle-DHHUYikL.js";import"./RechartsThemeContext-oN75whkn.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./axisSelectors-BgzJH9qY.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./Curve-CBdRZDkC.js";import"./step-Cd2l06Ut.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bq0RY7UB.js";import"./useAnimationId-McaNs9se.js";import"./ActivePoints-CSFUF4Gb.js";import"./Dot-3F0SNdEj.js";import"./RegisterGraphicalItemId-DLOCgd05.js";import"./ErrorBarContext-DX33Jely.js";import"./graphicalItemIdentity-CeQSeT3p.js";import"./SetGraphicalItem-DoQBw7Cq.js";import"./getRadiusAndStrokeWidthFromDot-RfkcUhvi.js";import"./ActiveShapeUtils-CDGNe_G8.js";import"./useElementOffset-DE11cRod.js";import"./uniqBy-B-JKIk0o.js";import"./iteratee-Bh0t3XA2.js";import"./Cross-S_pcxdbW.js";import"./Rectangle-CcMV1lU1.js";import"./util-Dxo8gN5i.js";import"./Sector-aMzYJSPP.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
