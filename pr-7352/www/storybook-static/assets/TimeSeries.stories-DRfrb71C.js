import{e}from"./iframe-osYa99rW.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-DB9q536o.js";import{g as y}from"./arrayEqualityCheck-DVAn2Veo.js";import{C as g}from"./ComposedChart-Bt-pX0Ef.js";import{L as x}from"./Line-C2qsCCMD.js";import{R as S}from"./RechartsHookInspector-VtrkbRKP.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-BGIasGRq.js";import{T as V}from"./Tooltip-m7Vdw8eH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./zIndexSlice-DbxduRWl.js";import"./immer-C4kOpB_4.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./Curve-DMV5yuc6.js";import"./step-BBN71zyD.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Dd2jwjm5.js";import"./ActivePoints-42Our513.js";import"./Dot-DRU2iJQo.js";import"./RegisterGraphicalItemId-rIlloXLK.js";import"./ErrorBarContext-Xd9mG_11.js";import"./GraphicalItemClipPath-BJe2Wn_o.js";import"./SetGraphicalItem-DW948_Jf.js";import"./useAnimationId-CKNV6DVG.js";import"./getRadiusAndStrokeWidthFromDot-CGiLTsNp.js";import"./ActiveShapeUtils-CUIK7NEg.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";import"./useElementOffset-CZMoOZsh.js";import"./uniqBy-BYcGXJeH.js";import"./iteratee-DEaJE3ja.js";import"./Cross-JcJX91if.js";import"./Rectangle-D30liOk0.js";import"./Sector-_rfV5uw6.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
