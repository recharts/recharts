import{R as e}from"./iframe-DIZ3O37q.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B7HByjhZ.js";import{R as h}from"./zIndexSlice-BQzkuVGb.js";import{C as g}from"./ComposedChart-D39bvl9W.js";import{L as x}from"./Line-DtDR1pHd.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BsLoKPkH.js";import{T as V}from"./Tooltip-DcLqp7mQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./Text-CxShOurV.js";import"./pageBackground-RtZmpZCV.js";import"./isWellBehavedNumber-C03WQupV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./Label-BKiGyQaq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpnduxRR.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./dataEntryStyles-DEoRHL3P.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./throttle-CmJg4BXK.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CgxEqo8X.js";import"./RechartsWrapper-DCqN-I2W.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./path-DyVhHtw_.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./ErrorBarContext-ttnhO46D.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./useElementOffset-BA2R_9BV.js";import"./uniqBy-CLXI3ykK.js";import"./iteratee-BTyFVxv_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C52amwue.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./Sector-J0pHaKij.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
