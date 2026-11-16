import{R as e}from"./iframe-1fJ5z_WZ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Kvj5vG7_.js";import{R as h}from"./zIndexSlice-BJlX5T59.js";import{C as g}from"./ComposedChart-Ejf7RFZN.js";import{L as x}from"./Line-CbRnIiBV.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DqY1ZQ_w.js";import{T as V}from"./Tooltip-B7I7h11K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DL2qV91b.js";import"./Layer-6gV2DTZI.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./Label-C7hOOLTD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJTK4O93.js";import"./throttle-6GiZsFaS.js";import"./types-XVdAxFZ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-V7mZ-cGP.js";import"./RechartsWrapper-CR62a_mQ.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./Curve-D2bzFbuS.js";import"./step-DaCSxOe-.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CqRs5fjI.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./activeStyles-C3pl5b-R.js";import"./useAnimationId-BaNyc8zg.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./ErrorBarContext-CHpXmxM4.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./useElementOffset-DE_GKN50.js";import"./uniqBy-C60c41gU.js";import"./iteratee-DEMDIKbX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Ceq7OV8j.js";import"./Rectangle-kcn0wIRK.js";import"./util-Dxo8gN5i.js";import"./Sector-08zMVhX6.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
