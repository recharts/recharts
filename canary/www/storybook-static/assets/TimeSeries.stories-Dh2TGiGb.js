import{R as e}from"./iframe-CuGhPmlk.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CKjURUro.js";import{R as h}from"./zIndexSlice-BOf55cXv.js";import{C as g}from"./ComposedChart-BaRxWhmE.js";import{L as x}from"./Line-DF_AoKL_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DH8f3Idv.js";import{T as V}from"./Tooltip-DmDIsB-U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./resolveDefaultProps-JU216Ibw.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./Label-B62wTY7D.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./throttle-D0-4r1vg.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bzh2qDn8.js";import"./RechartsWrapper-CkD6y7S6.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./path-DyVhHtw_.js";import"./LabelList-T4o6_Eqe.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./activeStyles-U82greWp.js";import"./useAnimationId-DwU2Zwh7.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./ErrorBarContext-B35UIqZH.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./useElementOffset-DovsWr-R.js";import"./uniqBy-D9UgBzVb.js";import"./iteratee-CkLtFoKx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BREw-WAC.js";import"./Rectangle-CA1kt8UJ.js";import"./util-Dxo8gN5i.js";import"./Sector-ENB_SqU-.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
