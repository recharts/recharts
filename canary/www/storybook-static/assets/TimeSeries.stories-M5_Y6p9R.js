import{e}from"./iframe-BmdG6Yuj.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-yj9kgQkK.js";import{g as y}from"./arrayEqualityCheck-Cs0ODbAq.js";import{C as g}from"./ComposedChart-CzsBStAV.js";import{L as x}from"./Line-BXq3-19U.js";import{R as S}from"./RechartsHookInspector-C9gdculA.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-BCNqbAE1.js";import{T as V}from"./Tooltip-zfMIy2Sl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DQoe1nv2.js";import"./Layer-CTqkrp1s.js";import"./resolveDefaultProps-CzKMDris.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./Label-BahHfmoK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BALln1nu.js";import"./zIndexSlice-CernrlT2.js";import"./immer-r1hs1aui.js";import"./types-HBeXaxhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BiizQght.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./ReactUtils-BDG3-ZiE.js";import"./ActivePoints-3tH4QPDb.js";import"./Dot-C-X-bkP7.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./ErrorBarContext-DmBcQTJi.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./useAnimationId-DYvcKDoo.js";import"./getRadiusAndStrokeWidthFromDot-DMLzSi-R.js";import"./ActiveShapeUtils-DLVI0LAd.js";import"./isPlainObject-B7mW1TAl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr2ikaiy.js";import"./Trapezoid-BUVaAWPm.js";import"./Sector-CrLZSk6O.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";import"./step-B9kksXJi.js";import"./Curve-o1yfXHk1.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";import"./useElementOffset-DqYBnuYB.js";import"./uniqBy-cB4yLFVg.js";import"./iteratee-Cn99cyAf.js";import"./Cross-Djvw-tyz.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
