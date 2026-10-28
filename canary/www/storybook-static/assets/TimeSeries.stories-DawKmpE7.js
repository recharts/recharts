import{R as e}from"./iframe-Bvdgb1qV.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-D59h15hK.js";import{R as h}from"./zIndexSlice-B01j9Vcs.js";import{C as g}from"./ComposedChart-Buy3_glc.js";import{L as x}from"./Line-Bq9HsgXM.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-AQ3fTkSg.js";import{T as V}from"./Tooltip-D7ufEnAI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-qmdlREsz.js";import"./Layer-C-2DDjxl.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./Text-DPvkSF-G.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./Label-DP6vSrfL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEav2p-j.js";import"./throttle-BPyPQEAQ.js";import"./dataEntryStyles-BpvBRnn1.js";import"./types-BLGnyPc9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-B7JYqxaB.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./Curve-DVUXJ3hw.js";import"./step-DfpUdPc6.js";import"./path-DyVhHtw_.js";import"./LabelList-BzPq7Pbp.js";import"./ActivePoints-CspnecJX.js";import"./Dot-DtkvzlrW.js";import"./activeStyles-D6UDaEYG.js";import"./useAnimationId-t1eD8fzp.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getRadiusAndStrokeWidthFromDot-DNhfP8M9.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CSUJOjH7.js";import"./Rectangle-N8aUytSm.js";import"./util-Dxo8gN5i.js";import"./Sector-BbQhMLaT.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
