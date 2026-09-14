import{R as e}from"./iframe-29nHamCu.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-cHqDX1J9.js";import{R as h}from"./zIndexSlice-CZafadFX.js";import{C as g}from"./ComposedChart-DXLvIz9U.js";import{L as x}from"./Line-mWe9WFJd.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-hLJByxX9.js";import{T as V}from"./Tooltip-CJLUo3Ro.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BV_FsFXh.js";import"./Layer-DIXDf-ah.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./Label-BEXPduDP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAa-R99d.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./types-DxO-1x0s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dofh94RU.js";import"./throttle-BMJYFYDy.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./index-Dx-xeLKA.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./Curve-DsdcX6-6.js";import"./step-ChOhxi7M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cl8F531s.js";import"./useAnimationId-BJ08w86T.js";import"./ActivePoints-f_S-wuyy.js";import"./Dot-CkgSbF-F.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./ErrorBarContext-D_EVW9Tx.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getRadiusAndStrokeWidthFromDot-BqfwXveZ.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";import"./useElementOffset-C_qkeve9.js";import"./uniqBy-0tUOZnmc.js";import"./iteratee-BFs8MK2-.js";import"./Cross-CRs1SJSA.js";import"./Rectangle-VhVaxtJC.js";import"./util-Dxo8gN5i.js";import"./Sector-B2R7qc-h.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
