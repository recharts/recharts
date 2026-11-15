import{R as e}from"./iframe-C5Zmv3_Q.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CXSd1JZe.js";import{R as h}from"./zIndexSlice-C4av0-dC.js";import{C as g}from"./ComposedChart-DQmUib5w.js";import{L as x}from"./Line-CPW9K2II.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-AN13rbty.js";import{T as V}from"./Tooltip-h6O9GZQi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./Text-CCFi8jW2.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./Label-nDrE78J8.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./throttle-D_vuQCXn.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-LAQsy88k.js";import"./RechartsWrapper-Cbn62-za.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./Curve-CazSWC5X.js";import"./step-D-ukyLTR.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BKf5w-lY.js";import"./ActivePoints-GlAtMEJD.js";import"./Dot-BoR4BuHa.js";import"./activeStyles-CRgGZhKT.js";import"./useAnimationId-Dbt3XGZ7.js";import"./Symbols-CWRNkrAk.js";import"./symbol-B4pqWh0c.js";import"./ErrorBarContext-9P_gyWZq.js";import"./SetGraphicalItem-Bb8-L5uL.js";import"./getRadiusAndStrokeWidthFromDot-C3ICIzAo.js";import"./ActiveShapeUtils-HLQ9J4sr.js";import"./useEffectiveDataKey-DifAuVlu.js";import"./useElementOffset-Bvo80b_z.js";import"./uniqBy-4dpdqULc.js";import"./iteratee-BNZjisoW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BgRtOIbM.js";import"./Rectangle-BqOgBzLM.js";import"./util-Dxo8gN5i.js";import"./Sector-MSOin3JQ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
