import{e}from"./iframe-CA8OhNxH.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-fFf7Kpu6.js";import{R as y}from"./arrayEqualityCheck-CL-Z01lB.js";import{C as g}from"./ComposedChart-CxMwSzAt.js";import{L as x}from"./Line-CcQfDutl.js";import{R as S}from"./RechartsHookInspector-BugLDhSF.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DD8ooXHD.js";import{T as V}from"./Tooltip-CMstbhjF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-f2zOKi0X.js";import"./Layer-51jxPk-z.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./Label-B9rEotsE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbCOJVvb.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./immer-CLqkMfUW.js";import"./types-DIwXheU2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./ReactUtils-DijgxaRr.js";import"./ActivePoints-eqpt3_ru.js";import"./Dot-y1vkSdnO.js";import"./RegisterGraphicalItemId-WQn-qxjl.js";import"./ErrorBarContext-HJShwkTe.js";import"./GraphicalItemClipPath-D8pqnZaq.js";import"./SetGraphicalItem-dL7nqQCK.js";import"./useAnimationId-CFa_WVC3.js";import"./getRadiusAndStrokeWidthFromDot-DfZZAwG7.js";import"./ActiveShapeUtils-CHm7mV1T.js";import"./isPlainObject-BB9dmDmF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0apUPF6.js";import"./Trapezoid-DD5_8Z8z.js";import"./Sector-Dda5EE-9.js";import"./Symbols-BdJUl3ke.js";import"./symbol-GRJr5T5S.js";import"./step-Cu2k92Ir.js";import"./Curve-cpd6A-Ga.js";import"./index-BZ4hO2WS.js";import"./ChartSizeDimensions-CM9slMDG.js";import"./OffsetShower-B_M2I77E.js";import"./PlotAreaShower-gcaUHmcI.js";import"./useElementOffset-DiMHwcLU.js";import"./uniqBy-BD6E09wX.js";import"./iteratee-CYU4tR1-.js";import"./Cross-C7KKuxg5.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
