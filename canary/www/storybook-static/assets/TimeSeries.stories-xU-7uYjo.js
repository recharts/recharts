import{R as e}from"./iframe-BXeHtRRc.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-tstPVLiw.js";import{R as h}from"./zIndexSlice-cE44OqOD.js";import{C as g}from"./ComposedChart-CG0nrh_K.js";import{L as x}from"./Line-Bi2pbqFq.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D1ymsn93.js";import{T as V}from"./Tooltip-Di0nKIFE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CJL6L62i.js";import"./CartesianAxis-DlPp-Ttd.js";import"./Layer-G87RycP8.js";import"./resolveDefaultProps-C9hL96mo.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./Label-CmgKG_wT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdPLtMFq.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./types-DFlY2any.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./immer-DNshJjPH.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./axisSelectors-DwMRPNyX.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./Curve-DVgI-4Ur.js";import"./step-CWqUN4bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cld-WhT6.js";import"./useAnimationId-DKoglaf7.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BIzkJXPu.js";import"./Dot-BuBaCmSt.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getRadiusAndStrokeWidthFromDot-BwFthNRz.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./useElementOffset-D1DpNGPa.js";import"./uniqBy-CZHTY20m.js";import"./iteratee-BSnhLzO_.js";import"./Cross-Ds8fiepC.js";import"./Rectangle-BLmys3HY.js";import"./Sector-V3leyB8_.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
