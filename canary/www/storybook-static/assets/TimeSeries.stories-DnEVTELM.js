import{R as e}from"./iframe-CV_Focqb.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CbmbdddR.js";import{R as h}from"./zIndexSlice-BMlZ-BTA.js";import{C as g}from"./ComposedChart-MH3garqG.js";import{L as x}from"./Line-DHwzAAmS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CaWFw3Yv.js";import{T as V}from"./Tooltip-DeD9NHFI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./Label-Du5iQDtH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./throttle-B3rCyY-p.js";import"./dataEntryStyles-BVJSTixW.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BxeWYXvo.js";import"./RechartsWrapper-gHoUEC4B.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./Curve-BuhBl-mk.js";import"./step-BlU7WG28.js";import"./path-DyVhHtw_.js";import"./LabelList-DREKrdKH.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./activeStyles-gddFfhxG.js";import"./useAnimationId-DuuBzQL8.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./ActiveShapeUtils-180icphM.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./useElementOffset-BdGXytv2.js";import"./uniqBy-CNcyodij.js";import"./iteratee-D2eul8Fy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKgdkYiG.js";import"./Rectangle-DkrXeBYw.js";import"./util-Dxo8gN5i.js";import"./Sector-BG1ok6Xp.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
