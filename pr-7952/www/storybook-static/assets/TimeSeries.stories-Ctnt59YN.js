import{R as e}from"./iframe-BR4M1uiR.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CcBq3_nh.js";import{R as h}from"./zIndexSlice-HrFSVAcv.js";import{C as g}from"./ComposedChart-HjQSkOyf.js";import{L as x}from"./Line-BPjJBSiN.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CeZrfwiY.js";import{T as V}from"./Tooltip-fk4Y29bw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CHydPwh7.js";import"./Layer-DlfW1ESK.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./Label-XYAyrwIP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CLaDw56X.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./types-B-qT5SDC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./throttle-G6Y8pgni.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-BqweAZHb.js";import"./RechartsWrapper-B0bWwFQm.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./Curve-D8aJ7Tuc.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./activeStyles-WDF83Cdx.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./useElementOffset-BgqvZiar.js";import"./uniqBy-Duhs8M_o.js";import"./iteratee-DjlDP_tJ.js";import"./Cross-Dq_SuLms.js";import"./Rectangle-uO21666K.js";import"./util-Dxo8gN5i.js";import"./Sector-BI71AD0D.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
