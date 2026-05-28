import{e}from"./iframe-KzgC6yl3.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-CQ-aN71n.js";import{g as y}from"./arrayEqualityCheck-CI6mjpz-.js";import{C as g}from"./ComposedChart-Bck7I3Sx.js";import{L as x}from"./Line-BcSuBwlL.js";import{R as S}from"./RechartsHookInspector-CbwNoaPW.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-CYshLe_K.js";import{T as V}from"./Tooltip-I7hy77X8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-IwDruP1d.js";import"./Layer-LeweOpyN.js";import"./resolveDefaultProps-DbdijU9i.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./Label-DkRj53y4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B24S8uuv.js";import"./zIndexSlice-CoKEHAdo.js";import"./immer-BD-tkhpl.js";import"./types-eUgvlmUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-jEvY63xF.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./Curve-Q6mWCHhh.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CwLFTC_n.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";import"./useElementOffset-DQ7gwspq.js";import"./uniqBy-7QKyZwf-.js";import"./iteratee-XWXks4So.js";import"./Cross-D7GtPIWg.js";import"./Rectangle-kA7xLTPQ.js";import"./Sector-CyxSkJcb.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
