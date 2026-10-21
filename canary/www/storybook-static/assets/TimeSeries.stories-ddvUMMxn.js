import{R as e}from"./iframe-CQZPQf4O.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-vMRVH8Ao.js";import{R as h}from"./zIndexSlice-BxTiYWdU.js";import{C as g}from"./ComposedChart-BrH5TOj4.js";import{L as x}from"./Line-DjUB_QE1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dh160Q_7.js";import{T as V}from"./Tooltip-EX89F-vs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./Label-CwpPaPRc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKLTAFCk.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./throttle-AnGuXVWW.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Or82bYZb.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./Curve-CEf8Z_wT.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BVgaSCxL.js";import"./Rectangle-DRkwNU_p.js";import"./util-Dxo8gN5i.js";import"./Sector-B8sO8x4j.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
