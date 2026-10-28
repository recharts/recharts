import{R as e}from"./iframe-Bzny_MYO.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D652bNH-.js";import{R as h}from"./zIndexSlice-MTgyOxcR.js";import{C as g}from"./ComposedChart-C-U97YwV.js";import{L as x}from"./Line-nynINyW7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CLm70OA6.js";import{T as V}from"./Tooltip-foEeq-Dg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CF7trjb7.js";import"./Layer-DwImaMiy.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./Text-fNDWB5Io.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./Label-DTuGlMPs.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./throttle-GvTGKSCT.js";import"./types-DppBMtwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BEccdncb.js";import"./RechartsWrapper-DwCbU-k0.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./Curve-DvxHsU-S.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./LabelList-DP5qLQcH.js";import"./ActivePoints-7LmcTnxb.js";import"./Dot-B0SoNECw.js";import"./activeStyles-D4lYsebj.js";import"./useAnimationId-DPjHdwMC.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ErrorBarContext-B5xatTad.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getRadiusAndStrokeWidthFromDot-B5e8MQ8V.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DaNX623z.js";import"./Rectangle-BIffJDOA.js";import"./util-Dxo8gN5i.js";import"./Sector-0HEjef0D.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
