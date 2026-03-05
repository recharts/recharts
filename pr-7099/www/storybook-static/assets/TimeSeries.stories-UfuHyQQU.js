import{e}from"./iframe-Bhf_6EYG.js";import{X as s}from"./XAxis-BWizQgTN.js";import{R as y}from"./arrayEqualityCheck-B5hYgnzz.js";import{C as g}from"./ComposedChart-CXm17D-l.js";import{L as x}from"./Line-BD0JBpB-.js";import{R as S}from"./RechartsHookInspector-oY9r6aPa.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BxqYPjsE.js";import{T as V}from"./Tooltip-RSHdd8Ji.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CR_T_Fxw.js";import"./Layer-XFtQT-yw.js";import"./resolveDefaultProps-CltYoVM3.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./Label-CzjtkYX8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0zk77US.js";import"./zIndexSlice-C8FzPb5S.js";import"./immer-DsnYViPQ.js";import"./types-B1Me3-i2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./ReactUtils-BVVOmEmS.js";import"./ActivePoints-CzS01Ls6.js";import"./Dot-1VAAYKhE.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./ErrorBarContext-CFfHMS1a.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./useAnimationId-5DionbmP.js";import"./getRadiusAndStrokeWidthFromDot-Bbk5HhSJ.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./step-B0zDApE1.js";import"./Curve-CcL59NDu.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";import"./useElementOffset-BCpQNw_Z.js";import"./uniqBy-M-uQcWsx.js";import"./iteratee-C2Amkniy.js";import"./Cross-DmUMkRgg.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
