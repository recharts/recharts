import{e}from"./iframe-_5zxKgci.js";import{X as s}from"./XAxis-BoiUuQV6.js";import{R as y}from"./arrayEqualityCheck-DLMNeVLZ.js";import{C as g}from"./ComposedChart-UABhjuQ3.js";import{L as x}from"./Line-WKhxL_g2.js";import{R as S}from"./RechartsHookInspector-C23NmY-H.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CRK2FJTc.js";import{T as V}from"./Tooltip-BF6KT7dd.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-t0Xlfasl.js";import"./Layer-BeNKD6uh.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./Label-B3FoJLG-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbY9BdOy.js";import"./zIndexSlice-D2iO7-nB.js";import"./immer-BaMlApsY.js";import"./types-B4BvwS0U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-txKnD5_R.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./RechartsWrapper-C0zBti2g.js";import"./index-CQESjCWD.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./ReactUtils-u6DOyzs3.js";import"./ActivePoints-CxFHksKT.js";import"./Dot-fP6sFQSZ.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./ErrorBarContext-CvNdI_Cv.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./useAnimationId-B5UzlvQm.js";import"./getRadiusAndStrokeWidthFromDot-Boo0lFRT.js";import"./ActiveShapeUtils-DyNfLGNz.js";import"./isPlainObject-DMrThXxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLAaMXbr.js";import"./Trapezoid-DHmjrzCK.js";import"./Sector-CZQdSV3s.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";import"./step-CFxJr1fu.js";import"./Curve-DLvP5FI3.js";import"./index-CSd9dO1D.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./OffsetShower-_I7-ZVXC.js";import"./PlotAreaShower-Duhke6Yi.js";import"./useElementOffset-B6-UpGgV.js";import"./uniqBy-Bp2v7zul.js";import"./iteratee-BHXg1SGO.js";import"./Cross-DjU0xUW-.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
