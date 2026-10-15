import{R as e}from"./iframe-B0MhV86h.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-mSUHawKI.js";import{R as h}from"./zIndexSlice-JhYmjiRs.js";import{C as g}from"./ComposedChart-Bh5N048-.js";import{L as x}from"./Line-CWasAWgS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CR10n00v.js";import{T as V}from"./Tooltip-Cdn6ZAA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./Label-DtBWxW0-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OiTLfYLd.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./throttle-BiG1uYFs.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-CrrgMfKB.js";import"./RechartsWrapper-B_6wPZYR.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./Curve-BkmryfS-.js";import"./step-D52lSMQ-.js";import"./path-DyVhHtw_.js";import"./activeStyles-DryRBlXh.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./useEffectiveDataKey-DkWEBp9n.js";import"./useElementOffset-D3PGtHdN.js";import"./uniqBy-C-fLvMH7.js";import"./iteratee-Czlzoku_.js";import"./Cross-bltm8sjj.js";import"./Rectangle-CJdwGJ58.js";import"./util-Dxo8gN5i.js";import"./Sector-Cg6jha8o.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
