import{e}from"./iframe-CSwGLTl-.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cejj1aG-.js";import{R as y}from"./arrayEqualityCheck-CL-IA6GV.js";import{C as g}from"./ComposedChart-D5aR39_O.js";import{L as x}from"./Line-ETNwqRkd.js";import{R as S}from"./RechartsHookInspector-DZ91OVzb.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CqlzxEpT.js";import{T as V}from"./Tooltip-CUOd1fOu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DDF2MY6x.js";import"./Layer-D0EBgQRA.js";import"./resolveDefaultProps-DbJcxAkM.js";import"./Text-D_9ONK9Z.js";import"./DOMUtils-C-NFkrvl.js";import"./Label-ClsrPG6g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DrCWdG12.js";import"./zIndexSlice-DK1kcZUU.js";import"./immer-BjkgQKa2.js";import"./types-D4DhPIk-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BnadoeJ5.js";import"./hooks-Cr-aq8eM.js";import"./axisSelectors-B8HhzkAr.js";import"./RechartsWrapper-RCqgoQSn.js";import"./index-brbC5UV5.js";import"./CartesianChart-B2Rv6APp.js";import"./chartDataContext-ipF3cfQe.js";import"./CategoricalChart-JOHaAwTs.js";import"./ReactUtils-Dux8j2Wm.js";import"./ActivePoints-BjU36epI.js";import"./Dot-Chm2SzUE.js";import"./RegisterGraphicalItemId-hGiyGzsL.js";import"./ErrorBarContext-CbME5Fcu.js";import"./GraphicalItemClipPath-SXtIUXot.js";import"./SetGraphicalItem-p1UFOuzw.js";import"./useAnimationId-D8p9yFrw.js";import"./getRadiusAndStrokeWidthFromDot-BJuBIcOz.js";import"./ActiveShapeUtils-CIM0bDxf.js";import"./isPlainObject-DciJ0OZY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdfYyanO.js";import"./Trapezoid-D59NFDIE.js";import"./Sector-QxBrgctl.js";import"./Symbols-CiFP5VGL.js";import"./symbol-B4MVsM7L.js";import"./step-BjVh3UOw.js";import"./Curve-BKPjExFW.js";import"./index-CLE-w9Gg.js";import"./ChartSizeDimensions-DDHHkJGr.js";import"./OffsetShower-NxBS3DGv.js";import"./PlotAreaShower-iYv5cbpH.js";import"./useElementOffset-776TLx6I.js";import"./uniqBy-UkAqSFPJ.js";import"./iteratee-7prAmQ4J.js";import"./Cross-tT0EMVl1.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
