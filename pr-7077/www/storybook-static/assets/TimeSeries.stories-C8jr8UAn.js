import{e}from"./iframe-XFn8o3qI.js";import{X as s}from"./XAxis-wsJSxX26.js";import{R as y}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as g}from"./ComposedChart-CqHuuwTM.js";import{L as x}from"./Line-CI-PKSEE.js";import{R as S}from"./RechartsHookInspector-D90IXMov.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BECtu2Jj.js";import{T as V}from"./Tooltip-tprePoLa.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-j4wY0iFh.js";import"./Layer-DCadlIaL.js";import"./resolveDefaultProps-DasUcEmR.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./Label-BlYwY5-1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWBavU2w.js";import"./zIndexSlice-BaTuqdfU.js";import"./immer-Hw8ZlrcX.js";import"./types-Bj0G5aQF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./ReactUtils-B41U7gki.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./ErrorBarContext-BybKQWHl.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./useAnimationId-DlDP6-K6.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./ActiveShapeUtils-MPa98qw4.js";import"./isPlainObject-CuZzfPHd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kXtUPCc6.js";import"./Trapezoid-CWabxdPa.js";import"./Sector-DJqtk5y0.js";import"./Symbols-zbF4VeV5.js";import"./symbol-D6QfEsFp.js";import"./step-DeRmKfqt.js";import"./Curve-C3P9kzpN.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";import"./useElementOffset-DwQncf8i.js";import"./uniqBy-DWvxnCXh.js";import"./iteratee-Bgtm80pD.js";import"./Cross-DUUA83z7.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
