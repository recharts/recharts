import{R as e}from"./iframe-FAdFbT6J.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-2xPTd-UO.js";import{R as h}from"./zIndexSlice-COO8R9lj.js";import{C as g}from"./ComposedChart-ByetWKbs.js";import{L as x}from"./Line-jyNZb6sa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CfdNPJMp.js";import{T as V}from"./Tooltip-CRq_rlzM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./Label-MEQSQEMP.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./throttle-DmbGe_oo.js";import"./dataEntryStyles-CEjpbRUj.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DjwIFZga.js";import"./RechartsWrapper-B8CA35TH.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./Curve-DQIDgvYs.js";import"./step-DTM-27zI.js";import"./path-DyVhHtw_.js";import"./LabelList-BYdzk1TZ.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./activeStyles-D7U9MU9g.js";import"./useAnimationId-CiJHzCVR.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./useElementOffset-CTPpQQlY.js";import"./uniqBy-CNFPVLtL.js";import"./iteratee-DmPtyNGM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DtcmFape.js";import"./Rectangle-BbbHCzWy.js";import"./util-Dxo8gN5i.js";import"./Sector-Dj1vgMvZ.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
